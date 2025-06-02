import { useState } from 'react'

export default function Accordion(){
    const [activeIndex, setActiveIndex] = useState(0)

    return(
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel
                title="About"
                isActive={activeIndex === 0}
                onShow={() => { setActiveIndex(0)}}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida urna eget sapien vestibulum, vitae pharetra tortor porta. Aliquam erat volutpat. Nunc consequat velit ac dapibus tempus. In aliquam vel arcu a pretium. Fusce eros augue, hendrerit condimentum quam ut, dignissim pretium nibh. Nullam id leo lectus. Proin et libero eu eros dictum ornare porttitor at urna. Duis ornare, magna et viverra fermentum, dolor lectus auctor ligula, id placerat tellus magna eu tortor.
            </Panel>
            <Panel
                title="Etymology"
                isActive={activeIndex === 1}
                onShow={() => {setActiveIndex(1)}}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida urna eget sapien vestibulum, vitae pharetra tortor porta. Aliquam erat volutpat. Nunc consequat velit ac dapibus tempus. In aliquam vel arcu a pretium. Fusce eros augue, hendrerit condimentum quam ut, dignissim pretium nibh. Nullam id leo lectus. Proin et libero eu eros dictum ornare porttitor at urna. Duis ornare, magna et viverra fermentum, dolor lectus auctor ligula, id placerat tellus magna eu tortor.
            </Panel>
        </>
    )
}

function Panel({ title, children, isActive, onShow }){
    return(
        <section className="panel">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>
                    Show
                </button>
            )}
        </section>
    )
}