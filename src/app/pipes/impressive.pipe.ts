import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impressive',
})
export class ImpressivePipe implements PipeTransform {
  static readonly IMPRESSIVE_WORDS: string[] = [
    'Breathtaking',
    'Amazing',
    'Stunning',
    'Astounding',
    'Astonishing',
    'Awe-inspiring',
    'Stupendous',
    'Staggering',
    'Extraordinary',
    'Incredible',
    'Unbelievable',
  ];

  transform(value: string, ...args: string[]): string {
    return `${value} ${this.getRandomWord()}`; // Interpolación
  }

  private getRandomWord(): string {
    const randomIndex: number = Math.floor(
      Math.random() * ImpressivePipe.IMPRESSIVE_WORDS.length
    );
    return ImpressivePipe.IMPRESSIVE_WORDS[randomIndex];
  }
}
