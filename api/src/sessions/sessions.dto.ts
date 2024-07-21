export class CreateSessionDto {
    theme: string;
    title: string;
    description: string;
    durationMinutes: number;
    minNbParticipants: number;
}

export class UpdateSessionDto {
    id: string;
    theme?: string;
    title?: string;
    description?: string;
    durationMinutes?: number;
    minNbParticipants?: number;
}

export class DeleteSessionDto {
    id: string;
}
