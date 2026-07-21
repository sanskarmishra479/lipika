interface Word {
  text: string;
  start: number;
  end: number;
}

interface Caption {
  text: string;
  start: number;
  end: number;
  words: Word[];
}