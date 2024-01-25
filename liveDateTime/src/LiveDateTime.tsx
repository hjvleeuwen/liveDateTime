// Import necessary Mendix widget modules
import { Component, ReactNode, createElement } from "react";
import { format } from 'date-fns'; // Import the format function from date-fns

import "./ui/liveDateTime.css"

// Widget properties interface
interface LiveDateTimeProps {
    orginDate: Date;
}

// Widget class
export default class LiveDateTime extends Component<LiveDateTimeProps> {
    private intervalId: NodeJS.Timeout | null = null;

    // Lifecycle method to initialize the widget
    componentDidMount() {
        this.updateDateTime();
        this.intervalId = setInterval(this.updateDateTime, 1000);
    }

    // Lifecycle method to clean up the interval on unmount
    componentWillUnmount() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
        }
    }

    // Function to update the date and time
    updateDateTime = () => {
        const dateFormat  = 'yyyy'
        const { orginDate } = this.props       
        const currentDateTime = format(orginDate, dateFormat); // Use date-fns format function
        
        // Access the DOM element using the ref attribute or any other method
        const datetimeElement = document.getElementById("datetime");
        if (datetimeElement) {
            datetimeElement.textContent = currentDateTime;
        }
    };

    // Render method to render the widget
    render(): ReactNode {
        return (
            <span id="datetime" className="widget-live-datetime">
                {/* You can add additional content here if needed */}
            </span>
        );
    }
}

