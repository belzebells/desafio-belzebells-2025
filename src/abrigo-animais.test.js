import { AbrigoAnimais } from "./abrigo-animais";

describe('Abrigo de Animais', () => {

  test('Deve rejeitar animal inválido', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 'Lulu');
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');
      expect(resultado.lista[0]).toBe('Fofo - abrigo');
      expect(resultado.lista[1]).toBe('Rex - pessoa 1');
      expect(resultado.lista.length).toBe(2);
      expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal intercalando brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('BOLA,LASER',
      'BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola');

      expect(resultado.lista[0]).toBe('Bola - abrigo');
      expect(resultado.lista[1]).toBe('Fofo - pessoa 2');
      expect(resultado.lista[2]).toBe('Mimi - abrigo');
      expect(resultado.lista[3]).toBe('Rex - abrigo');
      expect(resultado.lista.length).toBe(4);
      expect(resultado.erro).toBeFalsy();
  });

  // 🔹 novos testes extras

  test('Deve rejeitar brinquedo inválido', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('BOLA,BOLA', 'RATO', 'Rex');
    expect(resultado.erro).toBe('Brinquedo inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve rejeitar animal duplicado na ordem', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,BOLA', 'RATO,NOVELO', 'Rex,Rex');
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve limitar adoção a no máximo 3 animais por pessoa', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA,NOVELO,CAIXA,LASER',
      'BOLA',
      'Rex,Bola,Bebe,Zero,Mimi'
    );
    const adotadosPessoa1 = resultado.lista.filter(l => l.endsWith('pessoa 1')).length;
    expect(adotadosPessoa1).toBeLessThanOrEqual(3);
  });

  test('Deve impedir que uma pessoa adote mais de 1 gato', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'BOLA,RATO,LASER',
      'CAIXA,NOVELO',
      'Mimi,Fofo'
    );
    // só um gato pode ser adotado por pessoa
    const adotadosPessoa1 = resultado.lista.filter(l => l.endsWith('pessoa 1'));
    expect(adotadosPessoa1.length).toBeLessThanOrEqual(1);
  });

  test('Deve adotar o Loco apenas se tiver companhia', () => {
    // sem companhia: abrigo
    let resultado = new AbrigoAnimais().encontraPessoas(
      'SKATE,RATO',
      'BOLA',
      'Loco'
    );
    expect(resultado.lista[0]).toBe('Loco - abrigo');

    // com companhia: pessoa 1 leva
    resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA,SKATE',
      'BOLA',
      'Rex,Loco'
    );
    expect(resultado.lista).toContain('Loco - pessoa 1');
  });
});
