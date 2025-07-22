// StoreLocations.jsx
import React from 'react';
import style from "../styles/pages/Stores.module.css"
import img1 from "../assets/Images/stores/shopimg1.jpeg"
import img2 from "../assets/Images/stores/shopimg2.jpeg"
import img3 from "../assets/Images/stores/shopimg3.jpeg"

const registeredOffice = {
  name: 'Registered Office',
  address: 'Shop No.1, Huda Market, Sector 23, Gurugram, Haryana, India',
  phone: ['+91 124 405 2774', '+91 7065 546 678'],
  mapSrc: 'https://www.google.com/maps?q=Shop+No.1,+Huda+Market,+Sector+23,+Gurugram,+Haryana,+India&output=embed',
  icon: '🏢',
};

const stores = [
  {
    name: 'Gurugram Store',
    address: 'KS Diamond Jewellers, Sector 23, Gurugram, Haryana',
    phone: ['+91 124 405 2774'],
    mapSrc: 'https://www.google.com/maps?q=KS+Diamond+Jewellers,+Sector+23,+Gurugram,+Haryana&output=embed',
    image: img1,
  },
  {
    name: 'Greater Noida Store',
    address: 'City Centre, Greater Noida, Uttar Pradesh',
    phone: ['+91 7065 546 678'],
    mapSrc: 'https://www.google.com/maps?q=City+Centre,+Greater+Noida,+Uttar+Pradesh&output=embed',
    image: img2,
  },
  {
    name: 'City Plaza Store',
    address: 'City Plaza, Greater Noida',
    phone: ['+91 7065 546 678'],
    mapSrc: 'https://www.google.com/maps?q=City+Plaza,+Greater+Noida&output=embed',
    image: img3,
  }
];

const RegisteredOfficeCard = ({ office }) => (
  <div className={style['registered-office-card']}>
    <h3 className={style['registered-office-title']}>{office.icon} {office.name}</h3>
    <p className={style['registered-office-address']}>{office.address}</p>
    <div className={style['registered-office-contact']}>
      {office.phone.map((phone, idx) => (
        <a key={idx} href={`tel:${phone.replace(/ /g, '')}`} className={style['registered-office-phone']}>
          📞 {phone}
        </a>
      ))}
    </div>
    <iframe
      src={office.mapSrc}
      loading="lazy"
      className={style['store-map']}
      allowFullScreen=""
      referrerPolicy="no-referrer-when-downgrade"
      title="Registered Office Map"
    ></iframe>
  </div>
);

const StoreCard = ({ store }) => (
  <div className={style['store-card']}>
    {store.image && (
      <img
        src={store.image}
        alt={store.name}
        className={style['store-image']}
      />
    )}
    <div className={style['store-info']}>
      <h3 className={style['store-title']}>{store.icon || '📍'} {store.name}</h3>
      <p className={style['store-address']}>{store.address}</p>
      <div className={style['store-contact']}>
        {store.phone.map((phone, idx) => (
          <a key={idx} href={`tel:${phone.replace(/ /g, '')}`} className={style['store-phone']}>
            📞 {phone}
          </a>
        ))}
      </div>
      {store.mapSrc && (
        <iframe
          src={store.mapSrc}
          loading="lazy"
          className={style['store-map']}
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
          title={`${store.name} Map`}
        ></iframe>
      )}
    </div>
  </div>
);

const StoreLocations = () => {
  return (
    <section className={style['store-section']}>
      <div className={style['store-header']}>
        <h2 className={style['store-main-title']}>Visit Our Stores</h2>
        <p className={style['store-subtitle']}>Find your nearest Kaira Jewellers showroom</p>
      </div>
      <RegisteredOfficeCard office={registeredOffice} />
      <div className={style['store-grid']}>
        {stores.map((store, index) => (
          <StoreCard key={index} store={store} />
        ))}
      </div>
    </section>
  );
};

export default StoreLocations;