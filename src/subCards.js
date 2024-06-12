import React from 'react';
import './subCards.css';

// Компонент CardContainer
export function CardContainer() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='header1'>
          <h1>Basic</h1>
        </div>
        <div>
          <ul>
            <li><i class="bi bi-check-lg"></i> Sample Text Here</li>
            <li><i class="bi bi-x-lg"></i> Other Text Title</li>
            <li><i class="bi bi-x-lg"></i> Text Space Here</li>
            <li><i class="bi bi-x-lg"></i> Description Here</li>
          </ul>
        </div>
        <div className='header1'>
          <h3 >SELECT PACKAGE</h3>
        </div>
      </div>
      <div className='card'>
        <div className='header2'>
          <h1>Standart</h1>
        </div>
        <div>
          <ul>
            <li><i class="bi bi-check-lg"></i> Sample Text Here</li>
            <li><i class="bi bi-check-lg"></i> Other Text Title</li>
            <li><i class="bi bi-check-lg"></i> Text Space Here</li>
            <li><i class="bi bi-x-lg"></i> Description Here</li>
          </ul>
        </div>
        <div className='header2'>
          <h3>SELECT PACKAGE</h3>
        </div>
      </div>
      <div className='card'>
        <div className='header3'>
          <h1 >Premium</h1>
        </div>
        <div>
          <ul>
            <li ><i class="bi bi-check-lg"></i> Sample Text Here</li>
            <li ><i class="bi bi-check-lg"></i> Other Text Title</li>
            <li ><i class="bi bi-check-lg"></i> Text Space Here</li>
            <li ><i class="bi bi-check-lg"></i> Description Here</li>
          </ul>
        </div>
        <div className='header3'>
          <h3 >SELECT PACKAGE</h3>
        </div>
      </div>
    </div>
  );
}
