import SupportCards from './SupportCards'
import SupportHeader from './SupportHeader'
import FAQs from './FAQs'
import SupportJoinTeam from './SupportJoinTeam'
import './index.css'

export default () => {
    return (
        <div className="support-container">
            <SupportHeader />
            <SupportCards />
            <FAQs />
            <SupportJoinTeam />
        </div>
    )
}