import { PictureDto } from "./picture.dto";

class PicturesMapper {
  public static toDto(raw: any): PictureDto {
    return raw;
  }
}

export default PicturesMapper;
