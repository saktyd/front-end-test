import React from 'react'
import HightlightTile from '../components/HightlightTile'

function Highlight() {

    const tilesContent = [
        { title: 'Consult', imgSource: require('../assets/icon/comments.svg'), description: 'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.' },
        { title: 'Design', imgSource: require('../assets/icon/paint-brush.svg'), description: 'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.' },
        { title: 'Develop', imgSource: require('../assets/icon/cubes.svg'), description: 'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.' },
        { title: 'Marketing', imgSource: require('../assets/icon/bullhorn.svg'), description: 'Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.' },
        { title: 'Manage', imgSource: require('../assets/icon/stream.svg'), description: 'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.' },
        { title: 'Evolve', imgSource: require('../assets/icon/chart.svg'), description: 'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.' },
    ]

    return (
        <div className="highlight">
            <div className="highlight__header">
                <header>How Can I Help You?</header>
                <p>Our work then targeted, best practices outcomes social innovation synergy.
                Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
                program areas scale.</p> 
            </div>
            <div className="highlight__tiles">
                { tilesContent.map((item, index) => (
                    <HightlightTile key={index} title={item.title} imgSource={item.imgSource} description={item.description} />
                )) }
            </div>
        </div>
    )
}

export default Highlight
