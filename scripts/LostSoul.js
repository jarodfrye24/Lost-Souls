Hooks.on('diceSoNiceReady', (dice3d) =>  {
	
	dice3d.addSystem({ id: "Lost Souls", name: "Lost Souls"}, "default");

	
		dice3d.addDicePreset({
		type: "d6",
		atlas: "modules/LostSoul/textures/LostSouls-0.json",
		labels: [
		'D6-1.webp',
		'D6-2.webp',
		'D6-3.webp',
		'D6-4.webp',
		'D6-5.webp',
		'D6-6.webp'
		],
		emissiveMaps: [
		'D6-1.webp',
		'D6-2.webp',
		'D6-3.webp',
		'D6-4.webp',
		'D6-5.webp',
		'D6-6.webp'
		],
		emissiveIntensity: 2,
		emissive: 0xffffff,
		system: "Lost Souls"
	}"d6");
	
		dice3d.addDicePreset({
		type: "d10",
		atlas: "modules/LostSoul/textures/LostSouls-0.json",
		labels: [
		'D10-1.webp',
		'D10-2.webp',
		'D10-3.webp',
		'D10-4.webp',
		'D10-5.webp',
		'D10-6.webp'
		'D10-7.webp',
		'D10-8.webp',
		'D10-9.webp',
		'D10-10.webp'
		],
		emissiveMaps: [
		'D10-1.webp',
		'D10-2.webp',
		'D10-3.webp',
		'D10-4.webp',
		'D10-5.webp',
		'D10-6.webp'
		'D10-7.webp',
		'D10-8.webp',
		'D10-9.webp',
		'D10-10.webp'
		],
		emissiveIntensity: 2,
		emissive: 0xffffff,
		system: "Lost Souls"
}"d10");
});
