import axios from 'axios'
import { Apod } from '../models/Apod'
import { logger } from '../utils/Logger'
const { AppState } = require('../AppState')

class NasaService {
  async getPicture() {
    const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=7BL82mEwbexTzDcpacPbKstly76t06V24junJq3m')
    AppState.apod = new Apod(res.data)
    logger.log(AppState.apod)
  }

  async findApodAtDate() {
    const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=7BL82mEwbexTzDcpacPbKstly76t06V24junJq3m?date=${AppState.currentQuery}`)
    logger.log(res)
    AppState.apod = new Apod(res.data)
    logger.log(AppState.apod)
  }
}

export const nasaService = new NasaService()
