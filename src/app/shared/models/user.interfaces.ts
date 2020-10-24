export interface IUser {
    name: string;
    surname: string;
    email: string;
    password: string;
    password_confirmation: string;
    phone: string;
    birth_date: string;
    gender: string;
    avatar: string;
    description?: string;
    app?: number;

    latitude: string;
    longitude: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;

    active?: number;
    is_affiliated?: number;
    affiliate_code?: string;
    reference?: string;
    referreds_number?: number;
    identification_doc?: string;
    commercial_register_doc?: string;
    other_doc?: string;

    user_type_id?: number;
    affiliate_type_id?: string;
    affiliate_level_id?: string;
    email_verified_at?: string;

    remember_token?: string;
};