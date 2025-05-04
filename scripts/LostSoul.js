Hooks.on('diceSoNiceReady', (dice3d) =>  {
	
	dice3d.addSystem({ id: "Lost Souls", name: "Lost Souls"}, "default");
	
		dice3d.addColorset({
		name: 'LostSoul_default',
		description: 'default',
		category: 'DICESONICE.AcquiredTaste',
		foreground: '#ffffff',
		background: '#000000',
		outline: '#ffffff',
		edge: '#000000',
		texture: 'none',
		visibility: 'hidden',
		material: 'pristine'
	});
	
		dice3d.addDicePreset({
		type: "d6",
		labels: [
		'modules/LostSoul/textures/D6-1.webp',
		'modules/LostSoul/textures/D6-2.webp',
		'modules/LostSoul/textures/D6-3.webp',
		'modules/LostSoul/textures/D6-4.webp',
		'modules/LostSoul/textures/D6-5.webp',
		'modules/LostSoul/textures/D6-6.webp'
		],
		emissiveMaps: [
		'modules/LostSoul/textures/D6-1.webp',
		'modules/LostSoul/textures/D6-2.webp',
		'modules/LostSoul/textures/D6-3.webp',
		'modules/LostSoul/textures/D6-4.webp',
		'modules/LostSoul/textures/D6-5.webp',
		'modules/LostSoul/textures/D6-6.webp'
		],
		emissiveIntensity: 2,
		emissive: 0xffffff,
		colorset: "LostSoul_default",
		system: "Lost Souls"
	}, "d6");
	
		dice3d.addDicePreset({
		type: "d10",
		labels: [
		'modules/LostSoul/textures/D10-1.webp',
		'modules/LostSoul/textures/D10-2.webp',
		'modules/LostSoul/textures/D10-3.webp',
		'modules/LostSoul/textures/D10-4.webp',
		'modules/LostSoul/textures/D10-5.webp',
		'modules/LostSoul/textures/D10-6.webp',
		'modules/LostSoul/textures/D10-7.webp',
		'modules/LostSoul/textures/D10-8.webp',
		'modules/LostSoul/textures/D10-9.webp',
		'modules/LostSoul/textures/D10-10.webp'
		],
		emissiveMaps: [
		'modules/LostSoul/textures/D10-1.webp',
		'modules/LostSoul/textures/D10-2.webp',
		'modules/LostSoul/textures/D10-3.webp',
		'modules/LostSoul/textures/D10-4.webp',
		'modules/LostSoul/textures/D10-5.webp',
		'modules/LostSoul/textures/D10-6.webp',
		'modules/LostSoul/textures/D10-7.webp',
		'modules/LostSoul/textures/D10-8.webp',
		'modules/LostSoul/textures/D10-9.webp',
		'modules/LostSoul/textures/D10-10.webp'
		],
		emissiveIntensity: 2,
		emissive: 0xffffff,
		colorset: "LostSoul_default",
		system: "Lost Souls"
}, "d10");
});