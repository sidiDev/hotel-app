import SupportCard from './SupportCard'

export default () => {

    const data = [
        {
            icon:   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>,
            title: 'Sales',
            details: 'Hotelfy support is here to help. Learn more about popular topics and find resources that will help you with all of your Hotelfy services.'
        },
        {
            icon:   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>,
            title: 'Technical support',
            details: 'Hotelfy support is here to help. Learn more about popular topics and find resources that will help you with all of your Hotelfy services.'
        },
        {
            icon:   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>,
            title: 'Media inquiries',
            details: 'Hotelfy support is here to help. Learn more about popular topics and find resources that will help you with all of your Hotelfy services.'
        },
    ]
    
    return (
        <div className="support-cards-container">
            <SupportCard data={data[0]} />
            <SupportCard data={data[1]} />
            <SupportCard data={data[2]} />
        </div>
    )
}