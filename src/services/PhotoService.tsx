export default class PhotoService {
  _apiBase: string = "https://pixabay.com/api";
  _apiKey: string = "16920402-bf97508ef455f20c5c69b8830";

  getResource = async (
    url: string,
    type: string = "photos"
  ): Promise<object> => {
    if (type === "videos") {
      this._apiBase = "https://pixabay.com/api/videos";
    }

    const response: Response = await fetch(
      `${this._apiBase}/?key=${this._apiKey}&${url}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  };

  getPhotos = async (
    tags: string = "home",
    page: number = 1
  ): Promise<object> => {
    return await this.getResource(
      `q=${encodeURIComponent(tags)}&page=${encodeURIComponent(
        page
      )}&per_page=21`
    );
  };

  getPhotoById = async (id: number): Promise<object> => {
    return await this.getResource(`id=${encodeURIComponent(id)}`);
  };

  getVideos = async (tags: string = "videos"): Promise<object> => {
    return await this.getResource(
      `q=${encodeURIComponent(tags)}&per_page=10`,
      "videos"
    );
  };

  getIllustrations = async (tags: string = "surrealism"): Promise<object> => {
    return await this.getResource(
      `q=${encodeURIComponent(tags)}&image_type=illustration&per_page=30`
    );
  };
}
