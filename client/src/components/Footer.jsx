import React from 'react'
import {Footer,FooterTitle,FooterLink,FooterLinkGroup} from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-800'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                     <Link to="/" className="self-center whitespace-nowrap text-xl
                     sm:text-xl font-semibold dark:text-white">
                      <span className='px-2 py-1 bg-gradient-to-r 
                      from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Ameya's</span>
                       Blog
                    </Link>
                </div>
                <div className='grid grid-cols-2 mt-4 gap-8 sm:mt-4 sm:grid-cols-3
                sm-gap-6'>
                    <div>
                        <FooterTitle title="About"/>
                        <FooterLinkGroup col>
                            <FooterLink href="/about"
                            target>
                                Ameya's Blog
                            </FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="Follow Us"/>
                        <FooterLinkGroup col>
                            <FooterLink href="/about"
                            target="_blank"
                            rel="noopener noreferrer">
                                Github
                            </FooterLink>
                            <FooterLink href="/about"
                            target="_blank"
                            rel="noopener noreferrer">
                                Linkedin
                            </FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="LEGAL"/>
                        <FooterLinkGroup col>
                            <FooterLink href="/about"
                            target="_blank"
                            rel="noopener noreferrer">
                                Privacy Policy
                            </FooterLink>
                            <FooterLink href="/about"
                            target="_blank"
                            rel="noopener noreferrer">
                                Terms & Conditions
                            </FooterLink>
                        </FooterLinkGroup>
                    </div>

                </div>
            </div>
        </div>
    </Footer>
  )
}
