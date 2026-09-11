exports.handler = async function() {
  const TOKEN = 'b26c58ee9d1b4f8482340c8c4c3cf26b';
  const from = d => { let x=new Date(); x.setDate(x.getDate()+d); return x.toISOString().split('T')[0]; };
  const url = `https://api.football-data.org/v4/matches?dateFrom=${from(-2)}&dateTo=${from(2)}`;
  const r = await fetch(url, {headers:{'X-Auth-Token':TOKEN}});
  const data = await r.json();
  return { statusCode: 200, headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}, body: JSON.stringify(data) };
}
