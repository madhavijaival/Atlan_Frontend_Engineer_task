import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a dashboard layout which consists of a left sidebar and right content
 * The right content is split into top and bottom sections
 */

class Dashboard extends React.Component {
    render() {
        const { topLabel, bottomLabel, topContent, bottomContent, sidebarContent } = this.props;
        return (
            <div className="dashboard">
                <div className="sidebar">{sidebarContent}</div>
                <div className="dashboard-content">
                    <div className="content-section">
                        <div className="subtitle">{topLabel}</div>
                        <div className="msg">You can run these 2 queries : select * from [tablename] OR select employeeID [any table name+ID] from [tablename]</div>
                        <div className="content">{topContent}</div>
                    </div>
                    <div className="content-section">
                        <div className="subtitle">{bottomLabel}</div>
                        <div className="content">{bottomContent}</div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    sidebarContent: PropTypes.node,
    topLabel: PropTypes.string.isRequired,
    topContent: PropTypes.node,
    bottomLabel: PropTypes.string.isRequired,
    bottomContent: PropTypes.node,
};

export default Dashboard;