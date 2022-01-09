const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

for (let i = 0; i < alumns.length; i++) {
    alumns = alumns[i];
	let aprovados = 0;
	aprovados = alumns.T1 ? aprovados +1 : aprovados;
	aprovados = alumns.t2 ? aprovados +1 : aprovados;
	aprovados = alumns.t3 ? aprovados +1 : aprovados;
	alumns.isApproved = aprovados >= 2 ? true :false;
    
}
console.log(alumns);