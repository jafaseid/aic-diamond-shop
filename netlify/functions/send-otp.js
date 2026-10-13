exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "POST qofa fayyadami." }),
    };
  }

  return {
    statusCode: 501,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: "Tajaajilli SMS amma hin qophoofne. Tarkaanfii itti aanu keessatti ni guutna."
    }),
  };
};
