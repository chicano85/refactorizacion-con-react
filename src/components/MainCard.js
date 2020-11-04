import React from 'react';
import '../stylesheets/_mainCard.scss';

class MainCard extends React.Component {
  render() {
    return (
      <>
        <section class="mainCard">
          <div class="resetImage">
            <button
              class="mainCard__button js-resetBtn"
              type="reset"
              value="Reset"
            >
              <i
                class="far fa-trash-alt mainCard__button--trashBin"
                aria-hidden="true"
              ></i>
              Reset
            </button>
            <article class="mainCard__wrapper">
              <h1 class="mainCard__wrapper--name js-nameCard js-border1">
                Nombre completo
              </h1>
              <h2 class="mainCard__wrapper--position js-positionCard js-border2">
                Profesión
              </h2>
              <div class="profile">
                {/* <!-- <div class="profile__image js__profile-image">
          <img class="js-cardImg" src="" alt="" />
        </div> --> */}
                <div
                  class="profile__image js__profile-image"
                  style="
            background-image: url(https://i.picasion.com/pic90/275001457e7c33cd30cbc32e7de2aabe.gif);
          "
                ></div>
              </div>
              <nav>
                <ul class="mainCard__wrapper--list">
                  <li class="socialLink js-circle1">
                    <a
                      href=""
                      target="_blank"
                      class="socialLink__link js-tlCard js-icon1"
                    >
                      <i class="fas fa-mobile-alt" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="socialLink js-circle2">
                    <a
                      href=""
                      target="_blank"
                      class="socialLink__link js-emailCard js-icon2"
                    >
                      <i class="far fa-envelope" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="socialLink js-circle3">
                    <a
                      href=""
                      target="_blank"
                      class="socialLink__link js-linkedinCard js-icon3"
                    >
                      <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="socialLink js-circle4">
                    <a
                      href=""
                      target="_blank"
                      class="socialLink__link js-gitHubCard js-icon4"
                    >
                      <i class="fab fa-github-alt" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </article>
          </div>
        </section>
      </>
    );
  }
}

export default MainCard;
