"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ChangeEvent, useRef, useState } from 'react'
import useUserStore from '@/hooks/useUserStore'
import Rating from '@/components/Rating/Rating'
import ProfileStyle from './ProfileStyle.module.css'

const Profile = () => {

  const [isOwnProfile, setIsOwnProfile] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const {user} = useUserStore((state) => state)

  const triggerAvatarUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleAvatarChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files)
      return
    const file = event.target.files[0]
    console.log(file)
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString('en', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <div className={`${ProfileStyle.userProfile} max-w-4xl mx-auto p-6`}>
    {/* <div v-if="loading" className="text-center py-10">
      <TheLoader />
    </div> */}

    {/* <div v-else-if="error" className="text-center py-10 text-red-600">
      <p>{{ error }}</p>
      <button @click="loadProfile" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Try Again
      </button>
    </div> */}

    <div className={ProfileStyle.profileContent}>
      <div className={`${ProfileStyle.profileHeader} flex gap-6 mb-8`}>
        <div className={`${ProfileStyle.avatarWrapper} relative`}>
          <Image
            src="/user-placeholder"
            alt="test"
            width={32}
            height={32}
            className="w-32 h-32 rounded-full object-cover"
          />
          {isOwnProfile && <button
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black bg-opacity-60 text-white rounded-full text-sm"
            onClick={() => triggerAvatarUpload}
          >
            Change
          </button>}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(event) => handleAvatarChange(event)}
          />
        </div>

        <div className={`${ProfileStyle.userInfo} flex-1`}>
          <h2 className="text-2xl font-bold">{ user!.username }</h2>
          <p className="text-gray-600">Joined on { formatDate(user!.date_joined)}</p>
          <div className={`${ProfileStyle.rating} flex items-center gap-2`}>
            <Rating value={3.5} readOnly size="small" />
            <span className="text-gray-600 text-sm">20000</span>
          </div>
        </div>

        {isOwnProfile && <div className={ProfileStyle.profileActions}>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        </div>}
      </div>

      {isEditing && <div className={`${ProfileStyle.editForm} mb-8`}>
        <div className={`${ProfileStyle.formGroup} mb-4`}>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className={`${ProfileStyle.formGroup} mb-4`}>
          <label htmlFor="bio" className="block text-gray-700 font-medium mb-2">Bio</label>
          <textarea
            id="bio"
            v-model="form.bio"
            rows={4}
            className="w-full px-3 py-2 border rounded"
          ></textarea>
        </div>

        <div className={`${ProfileStyle.formGroup} mb-4`}>
          <label htmlFor="contacts" className="block text-gray-700 font-medium mb-2">Contacts</label>
          <input
            id="contacts"
            v-model="form.contacts"
            type="text"
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div className={`${ProfileStyle.formActions} flex justify-end gap-4`}>
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => {}}
          >
            Save
          </button>
        </div>
      </div>}

      {!isEditing && <div className={ProfileStyle.profileDetails}>
      <div className={`${ProfileStyle.detailSection} mb-6`} v-if="user.name">
          <h3 className="text-lg font-medium text-gray-700">Name</h3>
          <p className="text-gray-700">{ user!.first_name }</p>
        </div>

      <div className={`${ProfileStyle.detailSection} mb-6`} v-if="user.bio">
          <h3 className="text-lg font-medium text-gray-700">Bio</h3>
          <p className="text-gray-700">Lorem Ipsum</p>
        </div>

      <div className={`${ProfileStyle.detailSection} mb-6`} v-if="user.contacts">
          <h3 className="text-lg font-medium text-gray-700">Contacts</h3>
          <p className="text-gray-700">User contacts</p>
        </div>

      <div className={`${ProfileStyle.detailSection} mb-6`}>
          <h3 className="text-lg font-medium text-gray-700">Statistics</h3>
          <div className={`${ProfileStyle.stats} flex gap-8`}>
            <div className={`${ProfileStyle.statItem} text-center`}>
              <span className="block text-2xl font-bold text-gray-700">{ 50 }</span>
              <span className="text-gray-600">Textbooks</span>
            </div>
            <div className={`${ProfileStyle.statItem} text-center`}>
              <span className="block text-2xl font-bold text-gray-700">{ 50 }</span>
              <span className="text-gray-600">Sales</span>
            </div>
            <div className={`${ProfileStyle.statItem} text-center`}>
              <span className="block text-2xl font-bold text-gray-700">{ 50 }</span>
              <span className="text-gray-600">Reviews</span>
            </div>
          </div>
        </div>
      </div>}

      <div className={`${ProfileStyle.textbooksSection} mt-8`}>
        <h3 className="text-lg font-medium text-gray-700">My Textbooks</h3>
        
        {/* <div v-if="loading" className="text-center py-4">
          <TheLoader />
        </div>

        <div v-else-if="error" className="text-red-600 py-4">
          {{ error }}
        </div> */}

        <div v-else-if="!textbooks.length" className="text-gray-500 py-4">
          No textbooks found
        </div>

        {/* <div v-else className="textbooks-list mt-4 space-y-4">
          <div v-for="textbook in textbooks" 
              :key="textbook.id"
              className="textbook-item p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-lg">{{ textbook.title }}</h4>
                <p className="text-gray-600">Author: {{ textbook.author }}</p>
                <p className="text-gray-600">Grade: {{ textbook.grade }}</p>
                <p className="text-gray-600">Price: ${{ textbook.price }}</p>
                <p className="text-sm text-gray-500">Added: {{ formatDate(textbook.createdAt) }}</p>
              </div>
              <div className="flex space-x-2">
                <button 
                  @click="editTextbook(textbook)"
                  className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded">
                  Edit
                </button>
                <button 
                  @click="deleteTextbook(textbook.id)"
                  className="px-3 py-1 text-red-600 hover:bg-red-50 rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      </div>

      <Link href="/new-textbook" className="mt-8 inline-block px-4 py-2 bg-blue-500 text-white rounded">
        Add a New Textbook
      </Link>
  </div>
  )
}

export default Profile