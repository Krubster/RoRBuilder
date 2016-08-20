import React from 'react';
import CSSBar from '../../css/components/Bar.css';

const BarXp = (props) => {
  const calculateBarWidth = () => {
    const maxLevel = 40;
    const barWidth = Math.round((Number(props.currentLevel) / maxLevel) * 100);
    const barStyle = {
      width: `${barWidth}%`,
    };
    return barStyle;
  };
  return (
    <div className="marginBottom">
        <div className={CSSBar.BarXp}>
            <div className={CSSBar.BarProgressXp} style={calculateBarWidth()}></div>
        </div>
    </div>
  );
};

BarXp.propTypes = {
  currentLevel: React.PropTypes.number,
};

export default BarXp;
