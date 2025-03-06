export type ImageType = {
    preview: string;
    detail: string;
    full_size: string;
}

export type TextbookType = {
    id: number;
    seller: string;
    image: ImageType;
    title: string;
    author: string;
    school_class: string;
    publisher: string;
    price: string;
    description: string;
    whatsapp_contact: string;
    viber_contact: string;
    telegram_contact: string;
    phone_contact: string;
    condition: string;
    created_at: string;
    updated_at: string;
}

export type CredentialsType = {
    username: string;
    password: string;
}