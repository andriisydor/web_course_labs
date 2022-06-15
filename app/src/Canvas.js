import React, { useRef, useEffect, useState } from 'react'

const Canvas = (props) => {
  
  const canvasRef = useRef(null);
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(()=> {
    fetch(`http://127.0.0.1:5000/diagram?sign=${props.sign}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })
      .then(res => {
            if (res.status !== 200) {
                setData([]);
            }
            return res.json();
    })
      .then(
        (result) => {
            if ('data' in result){
                setData(result.data);
                setChange(!change);
            }
        },
        (error) => {
            setData([]);
        }
        )
  }, [])
  
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let max;
    let x;
    let w;
    let h;
    let stepX;
    let stepY; 
    
	ctx.fillStyle='white';
	ctx.fillRect(0,0,canvas.width,canvas.height);
	max=Math.max(...data);
	x=0;
	w=canvas.width-data.length;
	h=canvas.height;
	stepY=(h-10)/max;
	stepX=w/data.length;

	ctx.fillStyle='#9d1b25';
	for(var i=0, h2;i<data.length;i++){
	    h2=h-(data[i]*stepY);
		ctx.fillRect(x,h2,stepX,h-h2);
		x+=stepX+1;
	}
  }, [change])
  
  return <canvas ref={canvasRef} style={{display: 'inline', width: '40%'}}/>
}

export default Canvas