import React from 'react';
import './AppBrain.css';

import Boost from '../../assets/AppBrain/Boost.jpg';
import Price from '../../assets/AppBrain/Price.jpg';
import Retention from '../../assets/AppBrain/Retention.jpg';
import Time from '../../assets/AppBrain/time.jpg';
import campaign from '../../assets/AppBrain/campaign.jpg';
import Target from '../../assets/AppBrain/Target.jpg';

const Promote = () => {
  return (
    <div className='section'>
        <div className='align-center'>
            <div className="app-Brain-text-column">
          <h2 className="app-Brain-heading">
            AppBrain Promote
          </h2>
          <p className="app-Brain-description">
            The easiest way to promote your Android App. Increase your Android app’s users by promoting it on our network.
          </p>
        </div>
        </div>
        <div className='align-center'>
            <div className='promote-grid'>
                <div className='promote-card'>
                    <div className='promote-image-div'> 
                        <img src={Boost} alt={Boost} className="promote-logo" />
                        <div className='promote-disc-div'>
                            <h3 className="promote-name">Boost Your App</h3>
                            <p className="promote-desc">Boost your app’s growth with our global audience</p>
                        </div>
                        </div>
                </div>
                <div className='promote-card'>
                    <div className='promote-image-div'> 
                        <img src={Price} alt={Price} className="promote-logo" />
                        <div className='promote-disc-div'>
                            <h3 className="promote-name">Best Price</h3>
                            <p className="promote-desc">Pay the best price with our cost-per-install pricing model</p>
                        </div>
                        </div>
                </div>
                <div className='promote-card'>
                    <div className='promote-image-div'> 
                        <img src={Retention} alt={Retention} className="promote-logo" />
                        <div className='promote-disc-div'>
                            <h3 className="promote-name">High Retention</h3>
                            <p className="promote-desc">Score high retention rates as all traffic is non-incentivized</p>
                        </div>
                        </div>
                </div>
                <div className='promote-card'>
                    <div className='promote-image-div'> 
                        <img src={Time} alt={Time} className="promote-logo" />
                        <div className='promote-disc-div'>
                            <h3 className="promote-name">Real Time Reporting</h3>
                            <p className="promote-desc">Get clear and real-time reporting</p>
                        </div>
                        </div>
                </div>
                <div className='promote-card'>
                    <div className='promote-image-div'> 
                        <img src={campaign} alt={campaign} className="promote-logo" />
                        <div className='promote-disc-div'>
                            <h3 className="promote-name">Campaign</h3>
                            <p className="promote-desc">Create a user acquisition campaign within minutes</p>
                        </div>
                        </div>
                </div>
                <div className='promote-card'>
                    <div className='promote-image-div'> 
                        <img src={Target} alt={Target} className="promote-logo" />
                        <div className='promote-disc-div'>
                            <h3 className="promote-name">Target Specific USers</h3>
                            <p className="promote-desc">Target specific users with CPI boost rules</p>
                        </div>
                        </div>
                </div>
            </div>
        </div>
        <div className='align-center'>
            <div className="header-auth">
          <button className="auth-btn auth-login">More info</button>
        </div>
        </div>
        
        
    </div>
  );
};

export default Promote;