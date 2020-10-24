export interface IAplicantsEntity {
    id: number;
    name: string;
    surname: string;
    email: string;
    gender: string;
    birth_date: string;
    phone: string;
    avatar?: string;
    description?: string;
    address: string;
    latitude: string;
    longitude: string;
    city: string;
    state: string;
    country: string;
    active: string;
    is_affiliated: string;
    affiliate_code: string;
    reference?: string;
    referreds_number: string;
    identification_doc?: string;
    criminal_record_doc?: string;
    commercial_register_doc?: string;
    other_doc?: string;
    user_type_id: string;
    affiliate_type_id?: string;
    affiliate_level_id?: string;
    email_verified_at?: string;
    created_at?: string;
    updated_at?: string;
    userservices?: string[];
    userbusinesses?: string[];
    userentrepreneurs?: string[];
    usertype: {
        id: number,
        code: string,
        name: string,
        created_at?: string,
        updated_at?: string
    };

}
