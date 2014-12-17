"""
 Simple user personality generator
 Author: Lukasz Torba
"""
import sys
import urllib, urllib2
import random, base64, hashlib
import json, re

from bs4 import BeautifulSoup as Soup
from soupselect import select as _

Header = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Connection': 'keep-alive',
    'Referer': 'http://pl.fakenamegenerator.com/gen-random-pl-pl.php',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64)',
    'Content-Type': 'text/html; charset=windows-UTF-8'
}



def get_random_personality(AvatarSize = 256):
    """
        Generate some random personality using
        http://pl.fakenamegenerator.com/gen-random-pl-pl.php
        website
    """
    sys.stdout.write('Downloading personality... ')
    req = urllib2.Request('http://pl.fakenamegenerator.com/gen-random-pl-pl.php', urllib.urlencode({
        'gen': 'random',
        'n': 'pl',
        'c': 'pl'
    }), Header)
    # get data
    data = urllib2.urlopen(req).read()
    content = Soup(data)

    person = {
        'name': '', 'age': 0, 'height': 0, 'weight': 0
    }
    # get name + surname
    person['name'] = _(content, '.address h3')[0].get_text()
    person['age'] = random.randint(16, 80)
    person['height'] = random.randint(165, 210)
    person['weight'] = person['height'] / 2.0

    hash = hashlib.md5()
    hash.update(person['name'].encode('ascii','ignore') + str(person['height']))
    sys.stdout.write('\rDownloading user avatar')
    person['avatar'] = base64.b64encode(get_random_avatar(hash.hexdigest(), AvatarSize))
    sys.stdout.write('\rCreated user: '+person['name']+'\n')
    return person

def get_random_avatar(hash, size):
    """
        Download random avatar from
        http://www.avatarpro.biz/avatar/{hash}?s={size}
    """
    req = urllib2.Request('http://www.avatarpro.biz/avatar/{}?s={}'.format(hash, size), headers=Header)
    return urllib2.urlopen(req).read()

def generate(amount, out):
    """
        Generate some amount of fake persons
        Save persons to json file
    """

    # generate user personality
    persons = []
    for i in range(0, amount):
        persons.append(get_random_personality())

    # save to output
    json.dump(persons, open(out,'w+'))
    pass


if __name__ == "__main__":
    if len(sys.argv) >= 2:
        generate(int(sys.argv[1]), sys.argv[2])
    else:
        print 'Usage: gen [amount] [size]'