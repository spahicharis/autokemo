import { Component } from '@angular/core';

@Component({
  selector: 'app-partneri',
  standalone: true,
  imports: [],
  template: `
    <section class="py-5  bg-primary">
      <div class="container ">
        <div class="row justify-content-center text-left">
          <div class="col-12">
            <span class="text-muted">Početna > Partneri</span>
            <h2 class="mb-3 display-5 fw-bold">Partneri</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="text-center">
              <span class="text-muted">Our Story</span>
              <h2 class="display-5 fw-bold">About Us</h2>
              <p class="lead">Lorem ipsum dolor, sit amet elit Quamnitm veniam dicta architecto, quos id nemo minima nulla ducimus officii nulla ducimus officiis! Lorem ipsum dolor, sit amet elit Quamnitm veniam dicta architecto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center text-center mb-3">
          <div class="col-lg-8 col-xl-7">
            <span class="text-muted">Features</span>
            <h2 class="display-5 fw-bold">Our Features</h2>
            <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit Consequatur quidem eius cum voluptatum quasi delectus.</p>
          </div>
        </div>
        <div class="row g-5">
          <div class="col-xl-3 col-lg-4 col-sm-6 text-center">
            <div class="text-muted">
              <svg class="bi bi-aspect-ratio" fill="currentColor" height="48" viewbox="0 0 16 16" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"></path>
                <path d="M2 4.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H3v2.5a.5.5 0 0 1-1 0v-3zm12 7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H13V8.5a.5.5 0 0 1 1 0v3z"></path>
              </svg>
            </div>
            <h5 class="mt-3">Responsive Design</h5>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6 text-center">
            <div class="text-muted">
              <svg class="bi bi-emoji-wink" fill="currentColor" height="48" viewbox="0 0 16 16" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm1.757-.437a.5.5 0 0 1 .68.194.934.934 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.934 1.934 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68z"></path>
              </svg>
            </div>
            <h5 class="mt-3">Easy-To-Use</h5>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6 text-center">
            <div class="text-muted">
              <svg class="bi bi-layout-text-window-reverse" fill="currentColor" height="48" viewbox="0 0 16 16" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"></path>
                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1H2zM1 4v10a1 1 0 0 0 1 1h2V4H1zm4 0v11h9a1 1 0 0 0 1-1V4H5z"></path>
              </svg>
            </div>
            <h5 class="mt-3">100+ Components</h5>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6 text-center">
            <div class="text-muted">
              <svg class="bi bi-clipboard-check" fill="currentColor" height="48" viewbox="0 0 16 16" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" fill-rule="evenodd"></path>
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
              </svg>
            </div>
            <h5 class="mt-3">Copy & Paste</h5>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6 text-center">
            <div class="text-muted">
              <svg class="bi bi-speedometer2" fill="currentColor" height="48" viewbox="0 0 16 16" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"></path>
                <path d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z" fill-rule="evenodd"></path>
              </svg>
            </div>
            <h5 class="mt-3">Unlimited Usage</h5>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6 text-center">
            <div class="text-muted">
              <svg class="bi bi-pencil-square" fill="currentColor" height="48" viewbox="0 0 16 16" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" fill-rule="evenodd"></path>
              </svg>
            </div>
            <h5 class="mt-3">100% Customizable</h5>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6 text-center">
            <div class="text-muted">
              <svg class="bi bi-phone-vibrate" fill="currentColor" height="48" viewbox="0 0 16 16" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4zM6 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6z"></path>
                <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM1.599 4.058a.5.5 0 0 1 .208.676A6.967 6.967 0 0 0 1 8c0 1.18.292 2.292.807 3.266a.5.5 0 0 1-.884.468A7.968 7.968 0 0 1 0 8c0-1.347.334-2.619.923-3.734a.5.5 0 0 1 .676-.208zm12.802 0a.5.5 0 0 1 .676.208A7.967 7.967 0 0 1 16 8a7.967 7.967 0 0 1-.923 3.734.5.5 0 0 1-.884-.468A6.967 6.967 0 0 0 15 8c0-1.18-.292-2.292-.807-3.266a.5.5 0 0 1 .208-.676zM3.057 5.534a.5.5 0 0 1 .284.648A4.986 4.986 0 0 0 3 8c0 .642.12 1.255.34 1.818a.5.5 0 1 1-.93.364A5.986 5.986 0 0 1 2 8c0-.769.145-1.505.41-2.182a.5.5 0 0 1 .647-.284zm9.886 0a.5.5 0 0 1 .648.284C13.855 6.495 14 7.231 14 8c0 .769-.145 1.505-.41 2.182a.5.5 0 0 1-.93-.364C12.88 9.255 13 8.642 13 8c0-.642-.12-1.255-.34-1.818a.5.5 0 0 1 .283-.648z"></path>
              </svg>
            </div>
            <h5 class="mt-3">Mobile First</h5>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-6 text-center">
            <div class="text-muted">
              <svg class="bi bi-hand-thumbs-up" fill="currentColor" height="48" viewbox="0 0 16 16" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"></path>
              </svg>
            </div>
            <h5 class="mt-3">No Catches</h5>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center text-center mb-3 mb-md-5">
          <div class="col-lg-8 col-xxl-7">
            <span class="text-muted">Showcase</span>
            <h2 class="display-5 fw-bold mb-3">Our Gallery</h2>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta harum ipsum venenatis metus sem veniam eveniet aperiam suscipit.</p>
          </div>
        </div>
        <div class="carousel slide container pointer-event" data-bs-ride="carousel" id="galleryCarouse1">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row gy-4">
                <div class="col-md-3">
                  <img alt="" class="img-fluid rounded-1" src="https://freefrontend.dev/assets/square.png"></div>
                <div class="col-md-3">
                  <img alt="" class="img-fluid rounded-1" src="https://freefrontend.dev/assets/square.png"></div>
                <div class="col-md-3">
                  <img alt="" class="img-fluid rounded-1" src="https://freefrontend.dev/assets/square.png"></div>
                <div class="col-md-3">
                  <img alt="" class="img-fluid rounded-1" src="https://freefrontend.dev/assets/square.png"></div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row gy-4">
                <div class="col-md-3">
                  <img alt="" class="img-fluid rounded-1" src="https://freefrontend.dev/assets/square.png"></div>
                <div class="col-md-3">
                  <img alt="" class="img-fluid rounded-1" src="https://freefrontend.dev/assets/square.png"></div>
                <div class="col-md-3">
                  <img alt="" class="img-fluid rounded-1" src="https://freefrontend.dev/assets/square.png"></div>
                <div class="col-md-3">
                  <img alt="" class="img-fluid rounded-1" src="https://freefrontend.dev/assets/square.png"></div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#galleryCarouse1" type="button">
            <span aria-hidden="true" class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span></button>
          <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#galleryCarouse1" type="button">
            <span aria-hidden="true" class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span></button>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center text-center mb-4 mb-md-5">
          <div class="col-xl-9 col-xxl-8">
            <span class="text-muted">Read More</span>
            <h2 class="display-5 fw-bold">Our Blog</h2>
            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </div>
        <div class="row gy-4">
          <div class="col-md-4">
            <div class="shadow p-4">
              <div class="text-muted">
                10.10.2017
              </div>
              <h2 class="fw-semibold text-primary mt-1">
                <a class="text-primary text-decoration-none" href="">A short engaging title</a></h2>
              <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue risus sit amet dictum malesuada. Vestibulum viverra iaculis turpis, vitae varius lectus imperdiet at. Sed ultrices, ante vitae maximus laoreet, magna quam tincidunt ex, non faucibus justo dui commodo libero.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="shadow p-4">
              <div class="text-muted">
                10.10.2017
              </div>
              <h2 class="fw-semibold text-primary mt-1">
                <a class="text-primary text-decoration-none" href="">A short engaging title</a></h2>
              <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue risus sit amet dictum malesuada. Vestibulum viverra iaculis turpis, vitae varius lectus imperdiet at. Sed ultrices, ante vitae maximus laoreet, magna quam tincidunt ex, non faucibus justo dui commodo libero.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="shadow p-4">
              <div class="text-muted">
                10.10.2017
              </div>
              <h2 class="fw-semibold text-primary mt-1">
                <a class="text-primary text-decoration-none" href="">A short engaging title</a></h2>
              <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue risus sit amet dictum malesuada. Vestibulum viverra iaculis turpis, vitae varius lectus imperdiet at. Sed ultrices, ante vitae maximus laoreet, magna quam tincidunt ex, non faucibus justo dui commodo libero.</p>
            </div>
          </div>
        </div>
        <div class="col-md-2 d-grid mx-auto mt-5">
          <a class="btn btn-primary btn-lg" href="">Learn more</a>
        </div>
      </div>
    </section>

    <section class="py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="row align-items-center">
              <div class="col-md-4 mb-4 mb-md-0 order-md-2">
                <img alt="" class="img-fluid rounded-circle" src="https://freefrontend.dev/assets/square-small.png">
              </div>
              <div class="col-md-8 ps-md-5">
                <div class="text-primary mb-4">
                  <svg class="bi bi-quote" fill="currentColor" height="48" viewbox="0 0 16 16" width="48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                  </svg>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusantium nulla, sequi cupiditate exercitationem sit incidunt rerum explicabo. Soluta beatae esse praesentiumexercitationem vero harum pariatur adipisci qui veritatis est! sequi cupiditate exercitationem sit incidunt rerum explicabo.</p>
                <h5 class="fw-bold">John Doe</h5>
                <div class="text-muted">
                  Graphic Designer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``
})
export class PartneriComponent {

}
