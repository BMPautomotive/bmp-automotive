'use client'

import React from 'react'
import Image from 'next/image'
import ChipTuningWidget from '@/components/ChipTuningWidget'

export default function ChipTuningPage() {
  return (
    <div className="bg-m-dark min-h-screen">
      {/* Hero Section */}
      <div className="relative py-32 bg-gradient-to-b from-m-dark to-black">
        <div className="absolute inset-0">
          <Image
            src="/chip-tuning.jpg"
            alt="Chip Tuning"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CHIP TUNING
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional software solutions to enhance power and torque output of your BMW
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">ABOUT CHIP TUNING</h2>
                <p className="text-gray-300 mb-4">
                  Chip tuning is a process of modifying the electronic control unit (ECU) of your BMW to optimize its performance. Our professional software solutions can significantly increase power and torque while maintaining reliability.
                </p>
                <p className="text-gray-300">
                  We use state-of-the-art equipment and software to ensure the best results for your vehicle. Our team of experts has years of experience in BMW chip tuning and can provide customized solutions for your specific model.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">BENEFITS</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-m-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Increased horsepower and torque</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-m-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Improved throttle response</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-m-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Better fuel efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-m-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Removed speed limiter</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">TUNING RESULTS</h2>
                <ChipTuningWidget />
              </div>

              <div className="bg-white/5 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-6">PROCESS</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-m-red rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Diagnostics</h3>
                      <p className="text-gray-300">Complete vehicle check and software reading</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-m-red rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Development</h3>
                      <p className="text-gray-300">Custom software development for your BMW</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-m-red rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Installation</h3>
                      <p className="text-gray-300">Professional installation of the new software</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-m-red rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Testing</h3>
                      <p className="text-gray-300">Comprehensive testing and quality assurance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 