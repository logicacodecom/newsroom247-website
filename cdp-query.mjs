const target = process.argv[2];
const expressions = process.argv.slice(3);

let id = 0;
const pending = new Map();
const ws = new WebSocket(target);

function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const messageId = ++id;
    pending.set(messageId, resolve);
    ws.send(JSON.stringify({ id: messageId, method, params }));
    setTimeout(() => {
      if (pending.has(messageId)) {
        pending.delete(messageId);
        reject(new Error(`CDP timeout: ${method}`));
      }
    }, 10000);
  });
}

ws.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    pending.get(message.id)(message);
    pending.delete(message.id);
  }
});

ws.addEventListener("open", async () => {
  try {
    await send("Runtime.enable");
    for (const expression of expressions) {
      const response = await send("Runtime.evaluate", {
        expression,
        returnByValue: true,
        awaitPromise: true,
      });
      const value =
        response.result?.result?.value ??
        response.result?.exceptionDetails ??
        response;
      console.log(`---EXPR--- ${expression}`);
      console.log(JSON.stringify(value, null, 2));
    }
  } finally {
    ws.close();
  }
});
