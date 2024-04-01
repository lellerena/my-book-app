import { z } from 'zod'

export const bookSchema = z.object({
    titulo: z.string().min(1, 'El título es requerido'),
    autor: z.string().min(1, 'El autor es requerido'),
    genero: z.string().min(1, 'El género es requerido'),
    año_publicacion: z
        .number({ required_error: 'El año de publicación es requerido' })
        .min(1900, 'El año de publicación debe ser mayor o igual a 1900'),
    isbn: z.string().min(1, 'El ISBN es requerido'),
    editorial: z.string().min(1, 'La editorial es requerida'),
    cantidad: z
        .number({ required_error: 'La cantidad debe ser mayor o igual a cero' })
        .min(0, 'La cantidad debe ser mayor o igual a cero')
})

export const bookUpdateSchema = z.object({
    titulo: z.string().min(1, 'El título es requerido').optional(),
    autor: z.string().min(1, 'El autor es requerido').optional(),
    genero: z.string().min(1, 'El género es requerido').optional(),
    año_publicacion: z
        .number({ required_error: 'El año de publicación es requerido' })
        .min(1900, 'El año de publicación debe ser mayor o igual a 1900')
        .optional(),
    isbn: z.string().min(1, 'El ISBN es requerido').optional(),
    editorial: z.string().min(1, 'La editorial es requerida').optional(),
    cantidad: z
        .number({ required_error: 'La cantidad debe ser mayor o igual a cero' })
        .min(0, 'La cantidad debe ser mayor o igual a cero')
        .optional()
})

export const emptyExample = {
    titulo: '',
    autor: '',
    genero: '',
    año_publicacion: 0,
    isbn: '',
    editorial: '',
    cantidad: 0
}

export default bookSchema
