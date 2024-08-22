"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { templates } from './Templates';

const Page = () => {
  const params = useParams();
  const router = useRouter();
  const { storeName } = params;

  const [storeProducts, setStoreProducts] = useState(null);
  const [storeData, setStoreData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStoreData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_CONVEX_HTTP_URL}/getStoreData`, {
        params: { storeName }
      });

      if (response?.data?.userData === null) {
        router.push("/");
      } else {
        setStoreProducts(response?.data);
      }
      setStoreProducts(response?.data?.products);
      setStoreData(response?.data?.storeData);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (storeName) {
      fetchStoreData();
    } else {
      setLoading(false);
      setError("An error occured, try refreshing or check your internet connection");
    }
  }, [storeName]);

  const templateKey = storeData?.designChoice?.templateName;

  let TemplateChoice;
  if (templateKey && templates[templateKey]) {
    TemplateChoice = templates[templateKey].templateName;
  } else {
    TemplateChoice = templates["minima"].templateName;
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {TemplateChoice && storeProducts && <TemplateChoice products={storeProducts} storeName={storeName} userData={storeData} />}
    </div>
  );
};

export default Page;
