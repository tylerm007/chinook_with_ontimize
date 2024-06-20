# coding: utf-8
from sqlalchemy import Column, DateTime, ForeignKey, Integer, NVARCHAR, Numeric
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  June 20, 2024 10:29:21
# Database: sqlite:////Users/tylerband/dev/ApiLogicServer/ApiLogicServer-dev/build_and_test/chinook2/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Artist(SAFRSBaseX, Base):
    __tablename__ = 'artists'
    _s_collection_name = 'Artist'  # type: ignore
    __bind_key__ = 'None'

    ArtistId = Column(Integer, primary_key=True)
    Name = Column(NVARCHAR(120))

    # parent relationships (access parent)

    # child relationships (access children)
    AlbumList : Mapped[List["Album"]] = relationship(back_populates="artist")

    @jsonapi_attr
    def _check_sum_(self):  # type: ignore [no-redef]
        return None if isinstance(self, flask_sqlalchemy.model.DefaultMeta) \
            else self._check_sum_property if hasattr(self,"_check_sum_property") \
                else None  # property does not exist during initialization

    @_check_sum_.setter
    def _check_sum_(self, value):  # type: ignore [no-redef]
        self._check_sum_property = value

    S_CheckSum = _check_sum_


class Employee(SAFRSBaseX, Base):
    __tablename__ = 'employees'
    _s_collection_name = 'Employee'  # type: ignore
    __bind_key__ = 'None'

    EmployeeId = Column(Integer, primary_key=True)
    LastName = Column(NVARCHAR(20), nullable=False)
    FirstName = Column(NVARCHAR(20), nullable=False)
    Title = Column(NVARCHAR(30))
    ReportsTo = Column(ForeignKey('employees.EmployeeId'), index=True)
    BirthDate = Column(DateTime)
    HireDate = Column(DateTime)
    Address = Column(NVARCHAR(70))
    City = Column(NVARCHAR(40))
    State = Column(NVARCHAR(40))
    Country = Column(NVARCHAR(40))
    PostalCode = Column(NVARCHAR(10))
    Phone = Column(NVARCHAR(24))
    Fax = Column(NVARCHAR(24))
    Email = Column(NVARCHAR(60))

    # parent relationships (access parent)
    Employee : Mapped["Employee"] = relationship(remote_side=[EmployeeId], back_populates=("EmployeeList"))

    # child relationships (access children)
    EmployeeList : Mapped[List["Employee"]] = relationship(back_populates="Employee")
    CustomerList : Mapped[List["Customer"]] = relationship(back_populates="employee")

    @jsonapi_attr
    def _check_sum_(self):  # type: ignore [no-redef]
        return None if isinstance(self, flask_sqlalchemy.model.DefaultMeta) \
            else self._check_sum_property if hasattr(self,"_check_sum_property") \
                else None  # property does not exist during initialization

    @_check_sum_.setter
    def _check_sum_(self, value):  # type: ignore [no-redef]
        self._check_sum_property = value

    S_CheckSum = _check_sum_


class Genre(SAFRSBaseX, Base):
    __tablename__ = 'genres'
    _s_collection_name = 'Genre'  # type: ignore
    __bind_key__ = 'None'

    GenreId = Column(Integer, primary_key=True)
    Name = Column(NVARCHAR(120))

    # parent relationships (access parent)

    # child relationships (access children)
    TrackList : Mapped[List["Track"]] = relationship(back_populates="genre")

    @jsonapi_attr
    def _check_sum_(self):  # type: ignore [no-redef]
        return None if isinstance(self, flask_sqlalchemy.model.DefaultMeta) \
            else self._check_sum_property if hasattr(self,"_check_sum_property") \
                else None  # property does not exist during initialization

    @_check_sum_.setter
    def _check_sum_(self, value):  # type: ignore [no-redef]
        self._check_sum_property = value

    S_CheckSum = _check_sum_


class MediaType(SAFRSBaseX, Base):
    __tablename__ = 'media_types'
    _s_collection_name = 'MediaType'  # type: ignore
    __bind_key__ = 'None'

    MediaTypeId = Column(Integer, primary_key=True)
    Name = Column(NVARCHAR(120))

    # parent relationships (access parent)

    # child relationships (access children)
    TrackList : Mapped[List["Track"]] = relationship(back_populates="media_type")

    @jsonapi_attr
    def _check_sum_(self):  # type: ignore [no-redef]
        return None if isinstance(self, flask_sqlalchemy.model.DefaultMeta) \
            else self._check_sum_property if hasattr(self,"_check_sum_property") \
                else None  # property does not exist during initialization

    @_check_sum_.setter
    def _check_sum_(self, value):  # type: ignore [no-redef]
        self._check_sum_property = value

    S_CheckSum = _check_sum_


class Playlist(SAFRSBaseX, Base):
    __tablename__ = 'playlists'
    _s_collection_name = 'Playlist'  # type: ignore
    __bind_key__ = 'None'

    PlaylistId = Column(Integer, primary_key=True)
    Name = Column(NVARCHAR(120))

    # parent relationships (access parent)

    # child relationships (access children)
    PlaylistTrackList : Mapped[List["PlaylistTrack"]] = relationship(back_populates="playlist")

    @jsonapi_attr
    def _check_sum_(self):  # type: ignore [no-redef]
        return None if isinstance(self, flask_sqlalchemy.model.DefaultMeta) \
            else self._check_sum_property if hasattr(self,"_check_sum_property") \
                else None  # property does not exist during initialization

    @_check_sum_.setter
    def _check_sum_(self, value):  # type: ignore [no-redef]
        self._check_sum_property = value

    S_CheckSum = _check_sum_


class Album(SAFRSBaseX, Base):
    __tablename__ = 'albums'
    _s_collection_name = 'Album'  # type: ignore
    __bind_key__ = 'None'

    AlbumId = Column(Integer, primary_key=True)
    Title = Column(NVARCHAR(160), nullable=False)
    ArtistId = Column(ForeignKey('artists.ArtistId'), nullable=False, index=True)

    # parent relationships (access parent)
    artist : Mapped["Artist"] = relationship(back_populates=("AlbumList"))

    # child relationships (access children)
    TrackList : Mapped[List["Track"]] = relationship(back_populates="album")

    @jsonapi_attr
    def _check_sum_(self):  # type: ignore [no-redef]
        return None if isinstance(self, flask_sqlalchemy.model.DefaultMeta) \
            else self._check_sum_property if hasattr(self,"_check_sum_property") \
                else None  # property does not exist during initialization

    @_check_sum_.setter
    def _check_sum_(self, value):  # type: ignore [no-redef]
        self._check_sum_property = value

    S_CheckSum = _check_sum_


class Customer(SAFRSBaseX, Base):
    __tablename__ = 'customers'
    _s_collection_name = 'Customer'  # type: ignore
    __bind_key__ = 'None'

    CustomerId = Column(Integer, primary_key=True)
    FirstName = Column(NVARCHAR(40), nullable=False)
    LastName = Column(NVARCHAR(20), nullable=False)
    Company = Column(NVARCHAR(80))
    Address = Column(NVARCHAR(70))
    City = Column(NVARCHAR(40))
    State = Column(NVARCHAR(40))
    Country = Column(NVARCHAR(40))
    PostalCode = Column(NVARCHAR(10))
    Phone = Column(NVARCHAR(24))
    Fax = Column(NVARCHAR(24))
    Email = Column(NVARCHAR(60), nullable=False)
    SupportRepId = Column(ForeignKey('employees.EmployeeId'), index=True)

    # parent relationships (access parent)
    employee : Mapped["Employee"] = relationship(back_populates=("CustomerList"))

    # child relationships (access children)
    InvoiceList : Mapped[List["Invoice"]] = relationship(back_populates="customer")

    @jsonapi_attr
    def _check_sum_(self):  # type: ignore [no-redef]
        return None if isinstance(self, flask_sqlalchemy.model.DefaultMeta) \
            else self._check_sum_property if hasattr(self,"_check_sum_property") \
                else None  # property does not exist during initialization

    @_check_sum_.setter
    def _check_sum_(self, value):  # type: ignore [no-redef]
        self._check_sum_property = value

    S_CheckSum = _check_sum_


class Invoice(SAFRSBaseX, Base):
    __tablename__ = 'invoices'
    _s_collection_name = 'Invoice'  # type: ignore
    __bind_key__ = 'None'

    InvoiceId = Column(Integer, primary_key=True)
    CustomerId = Column(ForeignKey('customers.CustomerId'), nullable=False, index=True)
    InvoiceDate = Column(DateTime, nullable=False)
    BillingAddress = Column(NVARCHAR(70))
    BillingCity = Column(NVARCHAR(40))
    BillingState = Column(NVARCHAR(40))
    BillingCountry = Column(NVARCHAR(40))
    BillingPostalCode = Column(NVARCHAR(10))
    Total = Column(Numeric(10, 2), nullable=False)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("InvoiceList"))

    # child relationships (access children)
    InvoiceItemList : Mapped[List["InvoiceItem"]] = relationship(back_populates="invoice")

    @jsonapi_attr
    def _check_sum_(self):  # type: ignore [no-redef]
        return None if isinstance(self, flask_sqlalchemy.model.DefaultMeta) \
            else self._check_sum_property if hasattr(self,"_check_sum_property") \
                else None  # property does not exist during initialization

    @_check_sum_.setter
    def _check_sum_(self, value):  # type: ignore [no-redef]
        self._check_sum_property = value

    S_CheckSum = _check_sum_


class Track(SAFRSBaseX, Base):
    __tablename__ = 'tracks'
    _s_collection_name = 'Track'  # type: ignore
    __bind_key__ = 'None'

    TrackId = Column(Integer, primary_key=True)
    Name = Column(NVARCHAR(200), nullable=False)
    AlbumId = Column(ForeignKey('albums.AlbumId'), index=True)
    MediaTypeId = Column(ForeignKey('media_types.MediaTypeId'), nullable=False, index=True)
    GenreId = Column(ForeignKey('genres.GenreId'), index=True)
    Composer = Column(NVARCHAR(220))
    Milliseconds = Column(Integer, nullable=False)
    Bytes = Column(Integer)
    UnitPrice = Column(Numeric(10, 2), nullable=False)

    # parent relationships (access parent)
    album : Mapped["Album"] = relationship(back_populates=("TrackList"))
    genre : Mapped["Genre"] = relationship(back_populates=("TrackList"))
    media_type : Mapped["MediaType"] = relationship(back_populates=("TrackList"))

    # child relationships (access children)
    InvoiceItemList : Mapped[List["InvoiceItem"]] = relationship(back_populates="track")
    PlaylistTrackList : Mapped[List["PlaylistTrack"]] = relationship(back_populates="track")

    @jsonapi_attr
    def _check_sum_(self):  # type: ignore [no-redef]
        return None if isinstance(self, flask_sqlalchemy.model.DefaultMeta) \
            else self._check_sum_property if hasattr(self,"_check_sum_property") \
                else None  # property does not exist during initialization

    @_check_sum_.setter
    def _check_sum_(self, value):  # type: ignore [no-redef]
        self._check_sum_property = value

    S_CheckSum = _check_sum_


class InvoiceItem(SAFRSBaseX, Base):
    __tablename__ = 'invoice_items'
    _s_collection_name = 'InvoiceItem'  # type: ignore
    __bind_key__ = 'None'

    InvoiceLineId = Column(Integer, primary_key=True)
    InvoiceId = Column(ForeignKey('invoices.InvoiceId'), nullable=False, index=True)
    TrackId = Column(ForeignKey('tracks.TrackId'), nullable=False, index=True)
    UnitPrice = Column(Numeric(10, 2), nullable=False)
    Quantity = Column(Integer, nullable=False)

    # parent relationships (access parent)
    invoice : Mapped["Invoice"] = relationship(back_populates=("InvoiceItemList"))
    track : Mapped["Track"] = relationship(back_populates=("InvoiceItemList"))

    # child relationships (access children)

    @jsonapi_attr
    def _check_sum_(self):  # type: ignore [no-redef]
        return None if isinstance(self, flask_sqlalchemy.model.DefaultMeta) \
            else self._check_sum_property if hasattr(self,"_check_sum_property") \
                else None  # property does not exist during initialization

    @_check_sum_.setter
    def _check_sum_(self, value):  # type: ignore [no-redef]
        self._check_sum_property = value

    S_CheckSum = _check_sum_


class PlaylistTrack(SAFRSBaseX, Base):
    __tablename__ = 'playlist_track'
    _s_collection_name = 'PlaylistTrack'  # type: ignore
    __bind_key__ = 'None'

    PlaylistId = Column(ForeignKey('playlists.PlaylistId'), primary_key=True, nullable=False)
    TrackId = Column(ForeignKey('tracks.TrackId'), primary_key=True, nullable=False, index=True)
    allow_client_generated_ids = True

    # parent relationships (access parent)
    playlist : Mapped["Playlist"] = relationship(back_populates=("PlaylistTrackList"))
    track : Mapped["Track"] = relationship(back_populates=("PlaylistTrackList"))

    # child relationships (access children)

    @jsonapi_attr
    def _check_sum_(self):  # type: ignore [no-redef]
        return None if isinstance(self, flask_sqlalchemy.model.DefaultMeta) \
            else self._check_sum_property if hasattr(self,"_check_sum_property") \
                else None  # property does not exist during initialization

    @_check_sum_.setter
    def _check_sum_(self, value):  # type: ignore [no-redef]
        self._check_sum_property = value

    S_CheckSum = _check_sum_
