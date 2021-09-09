import mongoose from 'mongoose'

import { DB_URI } from './constants'

mongoose.connect(`${DB_URI}`).then(() => console.log('database connected...')).catch((error => {
    console.log(error)
}))