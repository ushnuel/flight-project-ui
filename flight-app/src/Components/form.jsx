import React from 'react';

const form = ({
  destination_city,
  departure_city,
  departure_date,
  return_date,
  cabin,
  no_of_adult,
  no_of_child,
  no_of_infant,
  Onchange,
  onSubmit,
  submitText,
}) => {
  return (
    <form id='searchForm' onSubmit={onSubmit}>
      <div className='bk-form-inputs'>
        <div className='bk-label-input'>
          <label htmlFor='departure_city'>
            Departure City <span>*</span>
          </label>
          <input
            type='text'
            name='departure_city'
            id='departure_city'
            required
            value={departure_city}
            onChange={Onchange}
          />
        </div>
        <div className='bk-label-input'>
          <label htmlFor='destination_city'>
            Destination City <span>*</span>
          </label>
          <input
            type='text'
            name='destination_city'
            id='destination_city'
            required
            value={destination_city}
            onChange={Onchange}
          />
        </div>
      </div>
      <div className='bk-form-inputs'>
        <div className='bk-label-input'>
          <label htmlFor='departure_date'>
            Departure Date <span>*</span>
          </label>
          <input
            type='date'
            name='departure_date'
            id='departure_date'
            required
            value={departure_date}
            onChange={Onchange}
          />
        </div>
        <div className='bk-label-input'>
          <label htmlFor='return_date'>
            Return Date <span>*</span>
          </label>
          <input
            type='date'
            name='return_date'
            id='return_date'
            required
            value={return_date}
            onChange={Onchange}
          />
        </div>
      </div>
      <div className='bk-form-inputs'>
        <div className='bk-label-input'>
          <label htmlFor='no_of_child'>
            Number of Children <span>*</span>
          </label>
          <input
            type='number'
            name='no_of_child'
            id='no_of_child'
            required
            value={no_of_child}
            onChange={Onchange}
          />
        </div>
        <div className='bk-label-input'>
          <label htmlFor='no_of_adult'>
            Number of Adults <span>*</span>
          </label>
          <input
            type='number'
            name='no_of_adult'
            id='no_of_adult'
            required
            value={no_of_adult}
            onChange={Onchange}
          />
        </div>
      </div>
      <div className='bk-form-inputs'>
        <div className='bk-label-input'>
          <label htmlFor='cabin'>
            Cabin Class <span>*</span>
          </label>
          <select name='cabin' id='cabin' required value={cabin} onChange={Onchange}>
            <option value='Select class'>Select class</option>
            <option value='All'>All</option>
            <option value='Economy'>Economy</option>
            <option value='First'>First</option>
            <option value='Premium'>Premium</option>
            <option value='Business'>Business</option>
          </select>
        </div>
        <div className='bk-label-input'>
          <label htmlFor='no_of_infant'>
            Number of Infants <span>*</span>
          </label>
          <input
            type='number'
            name='no_of_infant'
            id='no_of_infant'
            required
            value={no_of_infant}
            onChange={Onchange}
          />
        </div>
      </div>
      <button type='submit'>{submitText}</button>
    </form>
  );
};

export default form;
