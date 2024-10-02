import fs from 'fs';

export class FileHandler {
  private static instance: FileHandler;
  private constructor() {}

  public static getInstance(): FileHandler {
    if (!FileHandler.instance) FileHandler.instance = new FileHandler();
    return FileHandler.instance;
  }

  public readFile(filePath: string) {
    try {
      const data = fs.readFileSync(filePath, 'utf-8');
      return data;
    } catch (err) {
      console.log(err);
      return '';
    }
  }

  public writeFile(filePath: string, data: string) {
    try {
      fs.writeFileSync(filePath, data, 'utf-8');
    } catch (err) {
      console.error(err);
    }
  }
}
