export interface Noticia {
    id?: number;
    title: string;
    subtitle?: string;
    text: string;
    links: { label: string; url: string; }[];
}