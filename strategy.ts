interface ICalcMedia {
  CalcularMedia(P1: number, P2: number): number;
  Situacao(media: number): string;
}

class Disciplina {
  private media: number = 0;
  private nome: string = "";
  private P1: number = 0;
  private P2: number = 0;
  private situacao: string = "";
  private calcMedia: ICalcMedia;

  constructor(calcMedia: ICalcMedia) {
    this.calcMedia = calcMedia;
  }

  setNome(nome: string) {
    this.nome = nome;
  }

  setP1(P1: number) {
    this.P1 = P1;
  }

  setP2(P2: number) {
    this.P2 = P2;
  }

  CalcularMedia() {
    this.media = this.calcMedia.CalcularMedia(this.P1, this.P2);
  }

  Situacao() {
    this.situacao = this.calcMedia.Situacao(this.media);
  }

  getMedia() {
    return this.media;
  }

  getP1() {
    return this.P1;
  }

  getP2() {
    return this.P2;
  }

  getSituacao() {
    return this.situacao;
  }
}

class Aritmetica implements ICalcMedia {
  CalcularMedia(P1: number, P2: number): number {
    return (P1 + P2) / 2;
  }

  Situacao(media: number): string {
    if (media > 5) {
      return "Aprovado!";
    } else {
      return "Reprovado!";
    }
  }
}

class Geometrica implements ICalcMedia {
  CalcularMedia(P1: number, P2: number): number {
    return Math.sqrt(P1 * P2);
  }

  Situacao(media: number): string {
    if (media > 7) {
      return "Aprovado!";
    } else {
      return "Reprovado!";
    }
  }
}

const calculo = new Disciplina(new Aritmetica());
// const calculo = new Disciplina(new Geometrica());
calculo.setNome("Matemática");
calculo.setP1(10);
calculo.setP2(5);
calculo.CalcularMedia();
calculo.Situacao();

console.group();
console.log(
  `P1: ${calculo.getP1().toFixed(2)}, P2: ${calculo.getP2().toFixed}`
);
console.log(`Média: ${calculo.getMedia().toFixed(2)}`);
console.log(`Situação: ${calculo.getSituacao()}`);
console.groupEnd();
