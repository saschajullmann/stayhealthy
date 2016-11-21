import React from 'react';

const Newsletter = () =>
		<section className="mw-100 center bg-moon-gray pa3 ph5-ns">
			<div className="pa4-l">
			  <form className="bg-moon-gray mw7 center pa4 br2-ns">
			    <fieldset className="cf bn ma0 pa0">
			      <legend className="pa0 f5 f4-ns mb3 black-80">Melde dich jetzt für meinen Newsletter an</legend>
			      <div className="cf">
              <input className="fl f6 f5-l input-reset bn black-80 bg-white fl pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Deine E-Mail Adresse" type="text" name="Email_Adress" value="" id="Email_Adress"/>
              <input className="fl f6 f5-l button-reset pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Anmelden"/>
			      </div>
			    </fieldset>
			  </form>
			</div>
		</section>

export default Newsletter;
