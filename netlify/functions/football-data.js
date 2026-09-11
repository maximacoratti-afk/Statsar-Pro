exports.handler = async function() {
  const TOKEN = process.env.FOOTBALL_DATA_TOKEN;
  if (!TOKEN) {
    return { statusCode: 500, body: JSON.stringify({ error: "FALTA TOKEN ENV" }) };
  }
  try {
    const res = await fetch("https://api.football-data.org/v4/matches?limit=76", {
      headers: { "X-Auth-Token": TOKEN }
    });
    const data = await res.json();
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
