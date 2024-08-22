"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { templates } from "../../Templates";

const CheckoutPage = () => {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;
  const { storeName } = params;
  const [checkoutPage, setCheckoutPage] = useState(null);
  const [storeData, setStoreData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchCheckoutPage = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_CONVEX_HTTP_URL}/getCheckoutPageData`, {
        params: { storeName, slug }
      });

      if (response?.data?.product === null) {
        router.push("/");
      } else {
        setCheckoutPage(response?.data);
      }
      setCheckoutPage(response?.data?.product?.checkoutPage);
      setStoreData(response?.data?.storeData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchCheckoutPage();
    } else {
      setLoading(false);
      setError("An error occured, try refreshing or check your internet connection");
    }
  }, [slug]);
  const templateKey = storeData?.designChoice?.templateName;


  let CheckoutDesign;
  if (templateKey && templates[templateKey]) {
    CheckoutDesign = templates[templateKey].checkoutPage;
  } else {
    CheckoutDesign = templates["minima"].checkoutPage;
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {checkoutPage && <CheckoutDesign productData={checkoutPage} />}
    </div>
  );
};

export default CheckoutPage;
