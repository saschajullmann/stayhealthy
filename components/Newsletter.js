import React from 'react';

class Newsletter extends React.Component {
  //handleClick = (event) => {
  //  event.preventDefault();
  //  alert("hello du Pisser");
  //}

  render() {
    return (
      <section className="mw-100 center bg-moon-gray pa3 ph5-ns">
        <div className="pa4-l">
          <form 
            className="bg-moon-gray mw7 center pa4 br2-ns"
            action="//stayhealthyacademy.us14.list-manage.com/subscribe/post?u=0e17577ef9d96d23be7ddb17c&amp;id=cc4efe7b05" 
            method="post" 
            id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" 
            target="_blank" 
            noValidate
          >
            <fieldset className="cf bn ma0 pa0">
              <legend className="pa0 f5 f4-ns mb3 black-80">Melde dich jetzt für meinen Newsletter an</legend>
              <div className="cf">
                <input 
                  className="fl f6 f5-l bn black-80 bg-white fl pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
                  placeholder="Deine E-Mail Adresse" 
                  type="email" 
                  name="EMAIL" 
                  id="mce-EMAIL"
                  required
                />
                <input className="fl f6 f5-l button-reset pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" 
                  type="submit" 
                  value="Anmelden"/>
              </div>
              <legend className="pt2 f7 f6-ns mb3 black-80">Ich verspreche dir, deine Daten niemals weiterzugeben und verwende den Newsletter nur, um dir Neuigkeiten von mir zu berichten.</legend>
            </fieldset>
          </form>
        </div>
      </section>
    )
  };
}

export default Newsletter;
