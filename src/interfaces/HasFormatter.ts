
//Any class that uses this must contain a format function that returns a string
export interface HasFormatter {
  format(): string;
}