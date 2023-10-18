import CommonAPI from './common'
import MediaAPI from './media'

interface IBackEnd {
  common: typeof CommonAPI
  media: typeof MediaAPI
}
const BackEnd: IBackEnd = {
  common: CommonAPI,
  media: MediaAPI,
}
export default BackEnd
