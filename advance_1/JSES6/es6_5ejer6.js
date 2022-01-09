const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const mostrarRu = (event) => {
	console.log(event);
	const filtrarStreamer = streamers.filter((streamer) => streamer.name.toLocaleLowerCase().includes(input$$.value.toLocaleLowerCase()))
console.log(filtrarStreamer);

};
const input$$ = document.querySelector(`[data-function="toFilterStreamers"]`);

input$$.addEventListener("input", mostrarRu);

















