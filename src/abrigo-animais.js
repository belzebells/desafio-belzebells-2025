class AbrigoAnimais {
  // mapa oficial dos animais e seus brinquedos favoritos (na ordem)
  static ANIMAIS = {
    Rex:   { tipo: 'cão',    favoritos: ['RATO', 'BOLA'] },
    Mimi:  { tipo: 'gato',   favoritos: ['BOLA', 'LASER'] },
    Fofo:  { tipo: 'gato',   favoritos: ['BOLA', 'RATO', 'LASER'] },
    Zero:  { tipo: 'gato',   favoritos: ['RATO', 'BOLA'] },
    Bola:  { tipo: 'cão',    favoritos: ['CAIXA', 'NOVELO'] },
    Bebe:  { tipo: 'cão',    favoritos: ['LASER', 'RATO', 'BOLA'] },
    Loco:  { tipo: 'jabuti', favoritos: ['SKATE', 'RATO'], especial: 'loco' },
  };

  static BRINQUEDOS_VALIDOS = new Set(
    Object.values(AbrigoAnimais.ANIMAIS).flatMap(a => a.favoritos)
  );

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    // ---------- helpers ----------
    const parse = (s) =>
      (typeof s === 'string' ? s.split(',') : [])
        .map(x => x.trim())
        .filter(Boolean);

    const hasDup = (arr) => new Set(arr).size !== arr.length;

    const subsequenceInOrder = (favoritos, listaPessoa) => {
      let i = 0;
      for (const item of listaPessoa) {
        if (item === favoritos[i]) i++;
        if (i === favoritos.length) return true;
      }
      return favoritos.length === 0;
    };

    const qualifica = (favoritos, listaPessoa, especial) => {
      if (especial === 'loco') {
        return listaPessoa.includes('SKATE') && listaPessoa.includes('RATO');
      }
      return subsequenceInOrder(favoritos, listaPessoa);
    };

    // ---------- parsing ----------
    const p1 = parse(brinquedosPessoa1);
    const p2 = parse(brinquedosPessoa2);
    const ordem = parse(ordemAnimais);

    // ---------- validações de entrada ----------
    if (ordem.length === 0 || hasDup(ordem) || !ordem.every(n => AbrigoAnimais.ANIMAIS[n])) {
      return { erro: 'Animal inválido' };
    }

    const brinquedosOk = (lista) =>
      lista.length > 0 &&
      !hasDup(lista) &&
      lista.every(b => AbrigoAnimais.BRINQUEDOS_VALIDOS.has(b));

    if (!brinquedosOk(p1) || !brinquedosOk(p2)) {
      return { erro: 'Brinquedo inválido' };
    }

    // ---------- preparação para alocação ----------
    const resultado = {}; // { nomeAnimal: 'abrigo' | 'pessoa 1' | 'pessoa 2' }
    const adotados = { 1: 0, 2: 0 };
    const gatosPorPessoa = { 1: 0, 2: 0 };
    let houveLoco = false;

    for (const nome of ordem) {
      const info = AbrigoAnimais.ANIMAIS[nome];
      if (info.especial === 'loco') {
        houveLoco = true;
        continue;
      }

      const p1Pode = qualifica(info.favoritos, p1, info.especial);
      const p2Pode = qualifica(info.favoritos, p2, info.especial);

      let destino = 'abrigo';

      if (p1Pode && !p2Pode) destino = 'pessoa 1';
      if (!p1Pode && p2Pode) destino = 'pessoa 2';

      const aplicaRegrasPessoa = (alvo) => {
        if (destino !== alvo) return;
        const idx = alvo === 'pessoa 1' ? 1 : 2;
        if (adotados[idx] >= 3) { destino = 'abrigo'; return; }
        if (info.tipo === 'gato' && gatosPorPessoa[idx] >= 1) { destino = 'abrigo'; return; }
      };

      aplicaRegrasPessoa('pessoa 1');
      aplicaRegrasPessoa('pessoa 2');

      if (destino === 'pessoa 1') {
        adotados[1]++; if (info.tipo === 'gato') gatosPorPessoa[1]++;
      } else if (destino === 'pessoa 2') {
        adotados[2]++; if (info.tipo === 'gato') gatosPorPessoa[2]++;
      }

      resultado[nome] = destino;
    }

    // decide Loco por último (precisa de companhia)
    if (houveLoco) {
      const nome = 'Loco';
      const info = AbrigoAnimais.ANIMAIS[nome];
      const p1Pode = qualifica(info.favoritos, p1, info.especial);
      const p2Pode = qualifica(info.favoritos, p2, info.especial);

      const p1ComCompanhia = p1Pode && adotados[1] >= 1 && adotados[1] < 3;
      const p2ComCompanhia = p2Pode && adotados[2] >= 1 && adotados[2] < 3;

      let destino = 'abrigo';
      if (p1ComCompanhia && !p2ComCompanhia) destino = 'pessoa 1';
      if (!p1ComCompanhia && p2ComCompanhia) destino = 'pessoa 2';

      if (destino === 'pessoa 1') adotados[1]++;
      if (destino === 'pessoa 2') adotados[2]++;
      resultado[nome] = destino;
    }

    const lista = Object.keys(resultado)
      .sort((a, b) => a.localeCompare(b))
      .map(nome => `${nome} - ${resultado[nome]}`);

    return { lista };
  }
}

export { AbrigoAnimais as AbrigoAnimais };
