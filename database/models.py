# coding: utf-8
from sqlalchemy import Column, DECIMAL, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  June 17, 2024 08:44:16
# Database: mysql+pymysql://root:password@localhost:3308/Chinook
# Dialect:  mysql
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

from sqlalchemy.dialects.mysql import *



class Artist(SAFRSBaseX, Base):
    __tablename__ = 'Artist'
    _s_collection_name = 'Artist'  # type: ignore
    __bind_key__ = 'None'

    ArtistId = Column(Integer, primary_key=True)
    Name = Column(String(120))
    allow_client_generated_ids = True

    # parent relationships (access parent)

    # child relationships (access children)
    AlbumList : Mapped[List["Album"]] = relationship(back_populates="Artist")

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
    __tablename__ = 'Employee'
    _s_collection_name = 'Employee'  # type: ignore
    __bind_key__ = 'None'

    EmployeeId = Column(Integer, primary_key=True)
    LastName = Column(String(20), nullable=False)
    FirstName = Column(String(20), nullable=False)
    Title = Column(String(30))
    ReportsTo = Column(ForeignKey('Employee.EmployeeId'), index=True)
    BirthDate = Column(DateTime)
    HireDate = Column(DateTime)
    Address = Column(String(70))
    City = Column(String(40))
    State = Column(String(40))
    Country = Column(String(40))
    PostalCode = Column(String(10))
    Phone = Column(String(24))
    Fax = Column(String(24))
    Email = Column(String(60))
    allow_client_generated_ids = True

    # parent relationships (access parent)
    Employee : Mapped["Employee"] = relationship(remote_side=[EmployeeId], back_populates=("EmployeeList"))

    # child relationships (access children)
    EmployeeList : Mapped[List["Employee"]] = relationship(back_populates="Employee")
    CustomerList : Mapped[List["Customer"]] = relationship(back_populates="Employee")

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
    __tablename__ = 'Genre'
    _s_collection_name = 'Genre'  # type: ignore
    __bind_key__ = 'None'

    GenreId = Column(Integer, primary_key=True)
    Name = Column(String(120))
    allow_client_generated_ids = True

    # parent relationships (access parent)

    # child relationships (access children)
    TrackList : Mapped[List["Track"]] = relationship(back_populates="Genre")

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
    __tablename__ = 'MediaType'
    _s_collection_name = 'MediaType'  # type: ignore
    __bind_key__ = 'None'

    MediaTypeId = Column(Integer, primary_key=True)
    Name = Column(String(120))
    allow_client_generated_ids = True

    # parent relationships (access parent)

    # child relationships (access children)
    TrackList : Mapped[List["Track"]] = relationship(back_populates="MediaType")

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
    __tablename__ = 'Playlist'
    _s_collection_name = 'Playlist'  # type: ignore
    __bind_key__ = 'None'

    PlaylistId = Column(Integer, primary_key=True)
    Name = Column(String(120))
    allow_client_generated_ids = True

    # parent relationships (access parent)

    # child relationships (access children)
    PlaylistTrackList : Mapped[List["PlaylistTrack"]] = relationship(back_populates="Playlist")

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
    __tablename__ = 'Album'
    _s_collection_name = 'Album'  # type: ignore
    __bind_key__ = 'None'

    AlbumId = Column(Integer, primary_key=True)
    Title = Column(String(160), nullable=False)
    ArtistId = Column(ForeignKey('Artist.ArtistId'), nullable=False, index=True)
    allow_client_generated_ids = True

    # parent relationships (access parent)
    Artist : Mapped["Artist"] = relationship(back_populates=("AlbumList"))

    # child relationships (access children)
    TrackList : Mapped[List["Track"]] = relationship(back_populates="Album")

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
    __tablename__ = 'Customer'
    _s_collection_name = 'Customer'  # type: ignore
    __bind_key__ = 'None'

    CustomerId = Column(Integer, primary_key=True)
    FirstName = Column(String(40), nullable=False)
    LastName = Column(String(20), nullable=False)
    Company = Column(String(80))
    Address = Column(String(70))
    City = Column(String(40))
    State = Column(String(40))
    Country = Column(String(40))
    PostalCode = Column(String(10))
    Phone = Column(String(24))
    Fax = Column(String(24))
    Email = Column(String(60), nullable=False)
    SupportRepId = Column(ForeignKey('Employee.EmployeeId'), index=True)
    allow_client_generated_ids = True

    # parent relationships (access parent)
    Employee : Mapped["Employee"] = relationship(back_populates=("CustomerList"))

    # child relationships (access children)
    InvoiceList : Mapped[List["Invoice"]] = relationship(back_populates="Customer")

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
    __tablename__ = 'Invoice'
    _s_collection_name = 'Invoice'  # type: ignore
    __bind_key__ = 'None'

    InvoiceId = Column(Integer, primary_key=True)
    CustomerId = Column(ForeignKey('Customer.CustomerId'), nullable=False, index=True)
    InvoiceDate = Column(DateTime, nullable=False)
    BillingAddress = Column(String(70))
    BillingCity = Column(String(40))
    BillingState = Column(String(40))
    BillingCountry = Column(String(40))
    BillingPostalCode = Column(String(10))
    Total : DECIMAL = Column(DECIMAL(10, 2), nullable=False)
    allow_client_generated_ids = True

    # parent relationships (access parent)
    Customer : Mapped["Customer"] = relationship(back_populates=("InvoiceList"))

    # child relationships (access children)
    InvoiceLineList : Mapped[List["InvoiceLine"]] = relationship(back_populates="Invoice")

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
    __tablename__ = 'Track'
    _s_collection_name = 'Track'  # type: ignore
    __bind_key__ = 'None'

    TrackId = Column(Integer, primary_key=True)
    Name = Column(String(200), nullable=False)
    AlbumId = Column(ForeignKey('Album.AlbumId'), index=True)
    MediaTypeId = Column(ForeignKey('MediaType.MediaTypeId'), nullable=False, index=True)
    GenreId = Column(ForeignKey('Genre.GenreId'), index=True)
    Composer = Column(String(220))
    Milliseconds = Column(Integer, nullable=False)
    Bytes = Column(Integer)
    UnitPrice : DECIMAL = Column(DECIMAL(10, 2), nullable=False)
    allow_client_generated_ids = True

    # parent relationships (access parent)
    Album : Mapped["Album"] = relationship(back_populates=("TrackList"))
    Genre : Mapped["Genre"] = relationship(back_populates=("TrackList"))
    MediaType : Mapped["MediaType"] = relationship(back_populates=("TrackList"))

    # child relationships (access children)
    InvoiceLineList : Mapped[List["InvoiceLine"]] = relationship(back_populates="Track")
    PlaylistTrackList : Mapped[List["PlaylistTrack"]] = relationship(back_populates="Track")

    @jsonapi_attr
    def _check_sum_(self):  # type: ignore [no-redef]
        return None if isinstance(self, flask_sqlalchemy.model.DefaultMeta) \
            else self._check_sum_property if hasattr(self,"_check_sum_property") \
                else None  # property does not exist during initialization

    @_check_sum_.setter
    def _check_sum_(self, value):  # type: ignore [no-redef]
        self._check_sum_property = value

    S_CheckSum = _check_sum_


class InvoiceLine(SAFRSBaseX, Base):
    __tablename__ = 'InvoiceLine'
    _s_collection_name = 'InvoiceLine'  # type: ignore
    __bind_key__ = 'None'

    InvoiceLineId = Column(Integer, primary_key=True)
    InvoiceId = Column(ForeignKey('Invoice.InvoiceId'), nullable=False, index=True)
    TrackId = Column(ForeignKey('Track.TrackId'), nullable=False, index=True)
    UnitPrice : DECIMAL = Column(DECIMAL(10, 2), nullable=False)
    Quantity = Column(Integer, nullable=False)
    allow_client_generated_ids = True

    # parent relationships (access parent)
    Invoice : Mapped["Invoice"] = relationship(back_populates=("InvoiceLineList"))
    Track : Mapped["Track"] = relationship(back_populates=("InvoiceLineList"))

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
    __tablename__ = 'PlaylistTrack'
    _s_collection_name = 'PlaylistTrack'  # type: ignore
    __bind_key__ = 'None'

    PlaylistId = Column(ForeignKey('Playlist.PlaylistId'), primary_key=True, nullable=False)
    TrackId = Column(ForeignKey('Track.TrackId'), primary_key=True, nullable=False, index=True)
    allow_client_generated_ids = True

    # parent relationships (access parent)
    Playlist : Mapped["Playlist"] = relationship(back_populates=("PlaylistTrackList"))
    Track : Mapped["Track"] = relationship(back_populates=("PlaylistTrackList"))

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
