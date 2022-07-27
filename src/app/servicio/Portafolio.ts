export interface Portafolio {
    usuario: { id: number, nombreUsuario: string, clave: string, token: string, nombreAcercaDe: string };

    tecnologias: { id: number, tipo: string, valor: number }[];

    tarjetas: { id: number, url: string, descripcion: string }[];

    descripciones: { id: number, tipo: string, descripcionProyecto: string }[];

    chips: { id: number, chipDescripcion: string }[];
}       