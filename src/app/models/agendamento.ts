export interface Agendamento {
    id: number;
    pacienteId: number;
    pacienteNome: string;
    dataHora: string; // ISO date string
    status: 'PENDENTE' | 'CONFIRMADO' | 'CANCELADO'; // Ajuste conforme seu enum
    tokenConfirmacao: string;
}
