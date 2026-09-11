exports.handler = async function() {
  const TOKEN = process.env.FOOTBALL_DATA_TOKEN;
  try {
    const res = await fetch("https://api.football-data.org/v4/matches?status=FINISHED&limit=80", {
      headers: { "X-Auth-Token": TOKEN }
    });
    const data = await res.json();
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(data)
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
